// pages/api/submitContact.js

import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, subject, message } = req.body;

  // initialize Notion client
  const notion = new Client({
    auth: process.env.NOTION_API_SECRET, // Use environment variable
  });

  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID, // Use environment variable
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}
