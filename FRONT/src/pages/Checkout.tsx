import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MotionMain } from "../libs/framer";

type Inputs = {
  firstName: string;
  name: string;
  mail: string;
  phone: number;
  address: string;
  zip: number;
  city: string;
  country: string;
  paiement: string;
  message: string;
};

const Checkout = () => {
  const { register, handleSubmit, formState, reset } = useForm<Inputs>();
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  // To reset the form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <MotionMain
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="checkout"
    >
      <section className="checkout-container container">
        <div className="checkout-form form">
          <h1>CHECKOUT</h1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                placeholder="Votre prénom"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Votre prénom est requis",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <div className="form-input">
              <label htmlFor="firstName">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Votre nom est requis",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <div className="form-input">
              <label htmlFor="email">Adresse mail</label>
              <input
                type="mail"
                placeholder="monadresse@mail.com"
                {...register("mail", {
                  required: {
                    value: true,
                    message: "Votre adresse mail est requise",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <div className="form-input">
              <label htmlFor="phone">Numéro de téléphone</label>
              <input
                type="tel"
                placeholder="+33 6 12 34 56 78"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Votre numéro de téléphone est requis",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <h2>Infos pour la livraison</h2>
            <div className="form-input">
              <label htmlFor="address">Votre adresse</label>
              <input
                type="text"
                placeholder="11 rue de la Paix"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Votre adresse est requise",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <div className="form-input">
              <label htmlFor="zip">Code Postale</label>
              <input
                type="text"
                placeholder="75001"
                {...register("zip", {
                  required: {
                    value: true,
                    message: "Votre code postale est requis",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <div className="form-input">
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                placeholder="Paris"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Votre ville est requise",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <div className="form-input">
              <label htmlFor="country">Votre pays</label>
              <input
                type="text"
                placeholder="France"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Votre pays est requis",
                  },
                })}
              />
              <p className="form-error">{errors.message?.message}</p>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </section>
    </MotionMain>
  );
};

export default Checkout;
