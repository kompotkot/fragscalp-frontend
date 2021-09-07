import LongButton from "../components/LongButton"
import Layout from "../components/Layout"
import LongInput from "../components/LongInput"
import Stack from "../components/Stack"

const Account = () => {
	return (
		<Layout>
			<Stack>
				<Stack>
					API KEYS
					<LongInput placeholder="binance API key" />
					<LongInput placeholder="binance secret key" />
				</Stack>
				<Stack>
					PASSWORD
					<LongInput placeholder="old password" />
					<LongInput placeholder="new password" />
					<LongInput placeholder="new password confirm" />
					<LongButton>CHANGE PASSWORD</LongButton>
				</Stack>
				<Stack>
					<LongButton>LOG OUT</LongButton>
				</Stack>
			</Stack>
		</Layout>
	)
}

export default Account
