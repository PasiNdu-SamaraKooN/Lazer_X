/* Copyright (C) 2022 Lazer_X

Licensed under the  GPL-2.0 License;
you may not use this file except in compliance with the License.

LazerX
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function LazerX() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [3, 3234, 9]

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Lazer')}${chalk.blue.bold('X')}
${chalk.white.italic('Here is the Lazer_X Qr code')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('LazerX QR Code: '),
			'Lazer_X;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'Lazer_X;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Lütfen Bu Kodu Kimseyle Paylaşma ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"EĞER MESAJI KOPYALAMIYORSANIZ LÜTFEN WHATSAPP'I KONTROL EDİN. KENDİ NUMARANIZA QR KODU GÖNDERİLDİ!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

LazerX();

