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
