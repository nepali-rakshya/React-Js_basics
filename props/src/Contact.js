import ContactCSS from "./Contact.module.css";

const Contact = (props) => {
  console.log(props);
  return (
    <div className={ContactCSS.contact}>
      <img src={props.img} alt="" width="150px" />
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Contact;
