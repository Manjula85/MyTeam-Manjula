
const generatePage = (ename, id, email, officeNumber, role) => {

  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Software engineering team</title>
      <style>
      h1, h2{
        color:white;
      }
      h1{
        text-align: center;
        background-color: red;
        padding-top: 3%;
        padding-bottom: 3%;
      }
      .grid-container{
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        padding: 10px;
        margin: 0 15%;
      }
      .grid-container > div{
        border: red 1px solid;
        padding: 10px 10px;
        text-align: center;
      }
      div{
        color: black;
      }      
      section{
          margin-left: auto;
          margin-right: auto;
          height: 350px;
          width: 200px;
      }
      table{
        text-align: left;
        margin-left: auto;
        margin-right: auto;
      }
      
      td{
          border: 1px solid black;
          padding: 1%;
      }
      </style>
    </head>

    <body>
      <h1>My Team</h1>
      <div class="grid-container">
        <div class="item1" style="border: solid 1px black;">
          <!-- Ideally you want to manupulate the DOM or create another function to generate the team member item to appear here-->
          <section style="border: solid 1px black;">
            <div style="background-color: blue; margin-bottom: 20%; padding: 2%; text-align: left;" >
                <h2 style="font-weight: bold;">${ename}</h2>
                <h2>${role}</h2>
            </div>
            <div style="font-size: larger;">
                <table>
                    <tr>
                        <td>ID: ${id}</td>
                    </tr>
                    <tr>
                        <!--Active link-->
                        <td><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr>
                        <td>Office number: ${officeNumber}</td>
                    </tr>
                </table>
            </div>
          </section>
        </div>
    </body>
    </html>`;
}

module.exports = generatePage;
