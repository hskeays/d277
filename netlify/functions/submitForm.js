exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }
  
    const formData = JSON.parse(event.body);
  
    // Process form data (send email, save to database, etc.)
    // Example: sending an email
    const { firstName, lastName, email, subject, message } = formData;
    const emailBody = `
      First Name: ${firstName}\n
      Last Name: ${lastName}\n
      Email: ${email}\n
      Subject: ${subject}\n
      Message: ${message}\n
    `;
  
    // Send email using a service like SendGrid, Nodemailer, etc.
    // Example:
    // sendEmail(emailBody);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  };