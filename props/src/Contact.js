import ContactCSS from "./Contact.module.css";

const Contact = ({ img, name, phone, email }) => {
  return (
    <div className={ContactCSS.contact}>
      <img src={img} alt="" width="150px" />
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default Contact;
