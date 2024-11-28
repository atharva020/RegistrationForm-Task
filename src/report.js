function generateReport(records) {
  let reportHTML = `
      <html>
        <head>
          <title>Registration Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h1>Registration Report</h1>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Mobile Number</th>
                <th>Language</th>
                <th>Birth Date</th>
                <th>Gender</th>
                <th>Occupation</th>
                <th>Company</th>
                <th>Education Level</th>
                <th>Employment Status</th>
                <th>Annual Income</th>
                <th>PAN Number</th>
                <th>GitHub Link</th>
                <th>Passport Number</th>
                <th>Nationality</th>
                <th>Preferred Contact Method</th>
                <th>Emergency Contact Name</th>
                <th>Emergency Contact Number</th>
                <th>Medical Conditions</th>
                <th>Additional Comments</th>
              </tr>
            </thead>
            <tbody>
    `;

  records.forEach((record) => {
    reportHTML += `
        <tr>
          <td>${record.firstName}</td>
          <td>${record.lastName}</td>
          <td>${record.nickName}</td>
          <td>${record.email}</td>
          <td>${record.phoneNumber}</td>
          <td>${record.mobileNumber}</td>
          <td>${record.language}</td>
          <td>${
            record.birthDate
              ? new Date(record.birthDate).toLocaleDateString()
              : "N/A"
          }</td>
          <td>${record.gender}</td>
          <td>${record.occupation}</td>
          <td>${record.company}</td>
          <td>${record.educationLevel}</td>
          <td>${record.employmentStatus}</td>
          <td>${record.annualIncome}</td>
          <td>${record.panNumber}</td>
          <td><a href="${record.githubLink || "#"}" target="_blank">${
      record.githubLink
    }</a></td>
          <td>${record.passportNumber}</td>
          <td>${record.nationality}</td>
          <td>${record.preferredContactMethod}</td>
          <td>${record.emergencyContactName}</td>
          <td>${record.emergencyContactNumber}</td>
          <td>${record.medicalConditions}</td>
          <td>${record.additionalComments}</td>
        </tr>
      `;
  });

  reportHTML += `
          </tbody>
        </table>
      </body>
    </html>
    `;

  return reportHTML;
}

module.exports = generateReport;
