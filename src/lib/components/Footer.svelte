<script>
	import { gitRepo } from '../utils/constants';
</script>

<footer>
	<p>
		Copyright &copy; {new Date().getFullYear()} &nbsp;
		<a target="_blank" rel="noopener noreferrer" href="https://aromalanil.in/"> Aromal Anil </a>
		&nbsp;|&nbsp;{' '}
		<a href={`${gitRepo}/blob/master/LICENSE`} target="_blank" rel="noopener noreferrer">
			MIT License
		</a>
		&nbsp;|&nbsp;
		<a href={`/privacy-policy`} target="_blank" rel="noopener noreferrer"> Privacy Policy </a>
	</p>
</footer>
