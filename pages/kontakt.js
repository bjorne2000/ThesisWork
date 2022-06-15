import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import EmptyGrid from '../components/EmptyGrid';
import styles from '../styles/Kontakt.module.css'
import TextGrid from '../components/TextGrid';
import emailjs from 'emailjs-com'
function kontakt() {

  const [name, setName] = useState("");
  const [epost, setEpost] = useState("");
  const [amne, setAmne] = useState("");
  const [message, setMessage] = useState("");
  const [succesMessage, setSucces] = useState("")
  const form = useRef();
    function sendEmail(e){
      
      e.preventDefault();
      if(!name || !epost || !amne || !message){
       setSucces("Fyll i alla rutor")
       
        return
      }
      else{
        
      emailjs.sendForm('service_cz0oufc', 'template_ohp3bwb', form.current, 'Ugqz5nNY4SbZ7lc27')
      .then(res => {
        if(res.status=== 200){
          setSucces("Meddelande skickat")
          setName("")
          setEpost("")
          setAmne("")
          setMessage("")

        }
        else{
          setSucces("Något gick fel")
        }
        console.log(res);
      }).catch(err => console.log(err));


      ;

      }


      
    }

  return (
    
      <Grid container className={styles.bigGrid}>
          
        
        <EmptyGrid propMd={3} propSm={0}/>
        <Grid item md={3} sm={12}>
        <form ref={form} onSubmit={sendEmail}>
          <p className={styles.smallText}>Fyll i ditt namn ämne och E-post. <br/>Skriv sedan ditt meddelande och tyck på skicka</p>
          <TextField value={name} onChange={e => setName(e.target.value)}
          id="outlined-basic" label="Namn" variant="outlined" className={styles.inputLabel}/>

          <br/>
          <TextField value={epost} onChange={e => setEpost(e.target.value)} 
          id="outlined-basic" label="E-post" variant="outlined" className={styles.inputLabel}/>

          <br/>
          <TextField value={amne} onChange={e => setAmne(e.target.value)} 
          id="outlined-basic" label="Ämne" variant="outlined" className={styles.inputLabel}/>

          <br/>
          <TextField value={message} onChange={e => setMessage(e.target.value)} 
          id="outlined-basic" label="Meddelande" variant="outlined" className={styles.inputLabel}/>
          <br/>
          <Button type="submit" value="Send" className={styles.sendButton}>Send</Button>
          <p className={styles.succesMessage}>{succesMessage}</p>
          </form>
          
        </Grid>
         
        <Grid item  md={3} sm={12}>
                  <h3 className={styles.biggerText}>Adress</h3>
                  <p className={styles.smallText}>utmarksgatan123</p>

                  <h3 className={styles.biggerText}>E-post</h3>
                  <p className={styles.smallText}>christina@Livskraft.se</p>

                  <h3 className={styles.biggerText}>Telefon</h3>
                  <p className={styles.smallText}>123456787</p>


                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2227.0989352075467!2d12.698455116097689!3d56.06889857503528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652321414dd11ad%3A0x49cbaee1a247c11!2sUtmarksgatan%2C%20254%2054%20Helsingborg!5e0!3m2!1ssv!2sse!4v1655310656219!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                  
        </Grid> 
        <EmptyGrid propMd={3}  propSm={0}/>
      

      </Grid>

        
    
  )
}

export default kontakt