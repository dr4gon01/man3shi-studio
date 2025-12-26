import { NextResponse } from 'next/server';

export async function GET() {
  const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:Gollamandala;Nirmesh;;;
FN:Nirmesh Gollamandala
ORG:Man3shi Studio
TITLE:Principal Creative Technologist
TEL;TYPE=CELL,VOICE:+917207688484
URL;TYPE=WORK:https://www.man3shistudio.com
EMAIL;TYPE=WORK,INTERNET:man3shi.studio@gmail.com
ADR;TYPE=WORK:;;Hyderabad;Telangana;;;India
NOTE:Research: Nature Tech / Generative Systems.
REV:${new Date().toISOString()}
END:VCARD`;

  return new NextResponse(vcardContent, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Nirmesh-Man3shi.vcf"',
    },
  });
}