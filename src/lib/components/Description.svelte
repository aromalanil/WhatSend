<script>
	import { appName } from '../utils/constants';
	import demo from '../images/demo.webp';
</script>

<div class="description">
	<div class="content">
		<h1>Introducing {appName} 🎉</h1>
		<p>
			The revolutionary webapp that lets you reach out to anyone, even if they're not in your
			contact list.
		</p>
		<p>
			Say goodbye to the hassle of adding someone to your contacts just to send them a message. With {appName},
			you can simply enter their phone number/numbers, compose your message, and hit send!
		</p>
		<p>So why wait? Give it a try and start sending messages like a pro!</p>
	</div>
	<div class="img-wrapper">
		<img class="demo-image" src={demo} alt="demo-img" />
	</div>
</div>

<style>
	.description {
		width: 50%;
		background-color: var(--dark-grey);
		padding: 6rem 5%;
		padding-bottom: 0;
		color: var(--white);
	}
	:global(body.dark) .description {
		background-color: #131c21;
	}
	.img-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.demo-image {
		width: 30rem;
	}
	@media only screen and (min-width: 950px) {
		.description {
			-webkit-box-shadow: 11px 0px 21px -11px rgba(0, 0, 0, 0.4);
			-moz-box-shadow: 11px 0px 21px -11px rgba(0, 0, 0, 0.4);
			box-shadow: 11px 0px 21px -11px rgba(0, 0, 0, 0.4);
		}
	}
</style>
