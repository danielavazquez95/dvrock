import emailjs from 'emailjs-com';
import React from 'react';
import Swal from 'sweetalert2';


export const ContactScreen = () => {

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('gmail', 'template_pf6goea', e.target, 'user_JM8FCLBLOJcyZ2LOEZVvl')
          .then((result) => {
              console.log(result.text);
              Swal.fire('Enviado', 'Tu mensaje fue enviado exitosamente', 'success')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };

    return (
        <div className="container contact mb-4">
            <div className="row login-row justify-content-center">
                <div className="col-12 col-sm-10 col-md-6 col-xl-6 align-self-center ">
                    
                    <form className="form-container" onSubmit={sendEmail}>
                        <h4 className=" font-weight-bold">Contacto</h4>
                       <div className="form-group">
                            <label>Nombre</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                autoComplete="off" 
                                />
                        </div>
                         <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                aria-describedby="emailHelp"
                                autoComplete="off"  
                                />
                            
                        </div>
                        <div className="form-group">
                            <label>Asunto</label>
                            <input 
                                type="text" 
                                name="subject"
                                className="form-control" 
                                autoComplete="off" 
                                 />
                        </div>
                        <div className="form-group">
                            <label>Mensaje</label>
                            <textarea
                                type="text" 
                                name="message"
                                className="form-control" 
                                autoComplete="off" 
                                >
                            </textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block"
                            >
                               Enviar
                        </button>
                    </form>                   
                </div>
            </div>
        
        </div>
       




    )
}
