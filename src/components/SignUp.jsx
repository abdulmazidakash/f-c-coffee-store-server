import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {

	const {createUser} = useContext(AuthContext);

	const handleSignUp = e => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log('form sign up', email, password);

		createUser(email, password)
			.then(result =>{
				console.log('user created at fb' ,result.user);
				const createdAt = result?.user?.metadata?.creationTime;

				const newUser = { name, email, createdAt}

				//save new user info to the database
				fetch('http://localhost:5000/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(newUser)

				})
				.then(res => res.json())
				.then(data => {
					// console.log('user created to db', data);
					if(data.insertedId){
						console.log('user created in db');
					}
				})
			})
			.catch(error =>{
				console.log('error', error);
			})

		// createUser();

	}
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col">
					<div className="text-center">
					<h1 className="text-5xl font-bold">Sign Up!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
						quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleSignUp} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input type="name" placeholder="name" name='name' className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" placeholder="email" name='email' className="input input-bordered" required />
						</div>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input type="password" placeholder="password" name='password' className="input input-bordered" required />
						<label className="label">
							<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
						</label>
						</div>
						<div className="form-control mt-6">
						<button className="btn bg-gradient-to-l from-sky-900 to-rose-700 text-white">Sign Up</button>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;