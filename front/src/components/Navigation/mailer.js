import emailjs from "emailjs-com";
import "../mailer.css";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_kxfyf5r",
      "template_eptgup4",
      e.target,
      "CgEIVypYVrroyPkEs"
    ).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className="mailer">
      <div className="container border">
        <h1>Formulario de contacto</h1>
        <form className="row" onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name="name" className="form-control" />

          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />

          <label>Consulta</label>
          <textarea name="message" rows="4" className="form-control" />
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Mailer;
