import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, setCoffees, coffees}) => {


	const {name, chef, supplier, taste, category, details, photo, _id} = coffee;

	const handleDelete = _id =>{
		console.log(_id);

		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
			  confirmButton: "btn btn-success",
			  cancelButton: "btn btn-danger"
			},
			buttonsStyling: false
		  });
		  swalWithBootstrapButtons.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: true
		  }).then((result) => {
			if (result.isConfirmed) {

				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: 'DELETE'
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);

						if(data.deletedCount > 0){
							Swal.fire({
							title: "Deleted!",
							text: "Your file has been deleted.",
							icon: "success"
								
						})

						const remaining = coffees.filter(cof => cof._id !== _id);
						setCoffees(remaining);
						}
					})

			

			//   console.log('delete confirmed')
			} 
			// else if (
			//   /* Read more about handling dismissals below */
			//   result.dismiss === Swal.DismissReason.cancel
			// ) {
			//   swalWithBootstrapButtons.fire({
			// 	title: "Cancelled",
			// 	text: "Your imaginary file is safe :)",
			// 	icon: "error"
			//   });
			// }
		  });
	}

	return (
		<div className="card text-white md:card-side lg:card-side bg-gradient-to-b from-gray-800 to-sky-600 font-semibold shadow-xl">
		<figure>
			<img
				src={photo}
				alt="coffee" />
		</figure>
		<div className="flex w-full m-4 items-center justify-between">
			<div className='space-y-2'>
				<p>Name: {name}</p>
				<p>Chef: {chef}</p>
				<p>Taste: {taste}</p>
			</div>
			<div className="card-actions justify-end join join-vertical">
				<button className="btn join-item">View</button>
				<Link to={`/updateCoffee/${_id}`}>
					<button className="btn join-item">Update</button>
				</Link>
				<button
					onClick={() => handleDelete(_id)}
					className="btn join-item bg-red-500">Delete</button>
			</div>
		</div>
	</div>
	);
};

export default CoffeeCard;