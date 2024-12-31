import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { signInWithPopup } from 'firebase/auth'

import image from '../assets/images/youtube_logo_icon.png'
import { auth, googleProvider } from '../config'

export default function SignUpScreen() {
	const history = useNavigate()

	const signInWithGoogleHandler = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				history('/')
				console.log(result)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorMessage = error?.message
				// The email of the user's account used.
				// The AuthCredential type that was used.
				alert(errorMessage)
			})
	}

	return (
		<LoginWrapper>
			<LoginContainer>
				<div className="logo">
					<img
						className="logo-img"
						src={image}
						alt="Picture of the youtube"
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
						}}
					/>
				</div>

				<LoginText>
					<h2>Sign in to Youtube</h2>
				</LoginText>

				<button onClick={signInWithGoogleHandler}>Sign In With Google</button>
			</LoginContainer>
		</LoginWrapper>
	)
}

const LoginWrapper = styled.div`
	display: grid;
	background: #f8f8f8;
	width: 100vw;
	height: 100vh;
	place-items: center;

	button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #ff0000;
		border-color: #ff0000;
		color: white;
		font-size: 19px;
		transition: 0.5;
		padding: 0.7rem 1rem;
	}

	button:hover {
		background-color: rgba(255, 0, 0, 0.9);
		border-color: rgba(255, 0, 0, 0.9);
	}
`

const LoginContainer = styled.div`
	.logo {
		width: 7.62rem;
		height: 7rem;
		margin-left: 1.5rem;
		margin-bottom: 2rem;
	}
	padding: 100px;
	padding-top: 50px;
	text-align: center;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

const LoginText = styled.div``
