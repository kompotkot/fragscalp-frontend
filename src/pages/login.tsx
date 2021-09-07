import LongButton from "../components/LongButton"
import Layout from "../components/Layout"
import LongInput from "../components/LongInput"

const Login = () => {
	return (
		<Layout>
			<div>
				LOG IN
				<LongInput placeholder="login" />
				<LongInput placeholder="password" />
				<LongButton>Log in</LongButton>
			</div>
		</Layout>
	)
}

export default Login
