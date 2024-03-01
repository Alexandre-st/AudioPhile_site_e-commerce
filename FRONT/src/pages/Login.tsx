import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MotionMain } from "../libs/framer";

type LoginInputs = {
  email: string;
  password: string;
  message: string;
};

const Login = () => {
  const { register, handleSubmit, formState, reset } = useForm<LoginInputs>();
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: LoginInputs) => {
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
      className="login"
    >
      <section className="login-container container">
        <h1 className="login-title">Login</h1>
        <form
          className="login-form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="login-form-input">
            <label htmlFor="email">Votre nom d'utilisateur</label>
            <input
              type="text"
              placeholder="jean@email.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            <p className="login-form-errors">{errors.message?.message}</p>
          </div>
          <div className="login-form-input">
            <label htmlFor="password">Votre mot de passe</label>
            <input
              type="text"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Your password is required",
                },
              })}
            />
            <p className="login-form-errors">{errors.message?.message}</p>
          </div>
          <button type="submit" className="btn btn-orange">
            Se connecter
          </button>
        </form>
      </section>
    </MotionMain>
  );
};

export default Login;
