const express = require('express');
const cors = require('cors');
const Airtable = require('airtable');
require('dotenv').config();

const app = express();


app.use(cors({
  origin: '*', 
}));

app.use(express.json());

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appTBPmaiWJhyr948');

app.post('/submit', async (req, res) => {
  const formData = req.body;

  try {
    const records = await base('Table 1').create([
      {
        fields: {
          "Full Name": formData.name,
          "Contact Number": formData.contactNo,
          "Email Address": formData.email,
          "Department": formData.department,
          "Graduation Year": formData.graduationYear,
          "Organization/Startup Name": formData.organization,
          "Role": formData.role,
          "LinkedIn Profile URL ": formData.linkedinUrl
        }
      }
    ]);

    res.status(200).json({ id: records[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit' });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
