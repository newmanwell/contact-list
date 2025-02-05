const ContactDetails = (props) => {
  return (
    <section>
      <h2>Contact Card</h2>
      <h3>NAME: { props.oneContactDetails.name }</h3>
      <h3>EMAIL: { props.oneContactDetails.email }</h3>
      <h3>PHONE: { props.oneContactDetails.phone }</h3>
      <h4>WEBSITE: { props.oneContactDetails.website }</h4>
    </section>
  )
}

export default ContactDetails