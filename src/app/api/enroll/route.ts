import { NextResponse } from "next/server";

interface EnrollPayload {
  name: string;
  phone: string;
  course?: string;
  branch?: string;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.BITRIX_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("BITRIX_WEBHOOK_URL is not set");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  let payload: EnrollPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, phone, course, branch } = payload;
  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  // Sarlavha Bitrix'dagi mavjud konventsiya boʻyicha: "nomer | kurs | filial"
  // (masalan: "+998907897728 | Prompt | Namangan"). Sotuv boʻlimi lead
  // roʻyxatidayoq asosiy maʼlumotni koʻradi.
  const title =
    [phone.trim(), course?.trim(), branch?.trim()].filter(Boolean).join(" | ") ||
    "Saytdan roʻyxatdan oʻtish";

  const commentLines = [
    course && `Kurs: ${course}`,
    branch && `Filial: ${branch}`,
    `Telefon: ${phone}`,
    "Manba: najottalim.uz sayti",
  ].filter(Boolean);

  const bitrixRes = await fetch(`${webhookUrl}crm.lead.add.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        TITLE: title,
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        COMMENTS: commentLines.join("\n"),
        SOURCE_ID: "UC_5QGUNK", // Bitrix'dagi "web site" manbasi
        SOURCE_DESCRIPTION: "najottalim.uz",
      },
      params: { REGISTER_SONET_EVENT: "Y" },
    }),
  });

  if (!bitrixRes.ok) {
    console.error("Bitrix webhook error", bitrixRes.status, await bitrixRes.text());
    return NextResponse.json({ ok: false, error: "bitrix_error" }, { status: 502 });
  }

  const data = await bitrixRes.json();
  if (data.error) {
    console.error("Bitrix API error", data);
    return NextResponse.json({ ok: false, error: "bitrix_api_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, leadId: data.result });
}
