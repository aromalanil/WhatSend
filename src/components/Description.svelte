<script>
  import { appName } from '../utils/constants';
  import demo from '../images/demo.webp';
</script>

<div class="description">
  <div class="content">
    <h1>Whats is {appName} ?</h1>
    <p>
      Whatsapp only let&apos;s you make calls or send messages to the numbers present in your
      contact.
    </p>
    <p>
      But what if you don&apos;t want a person in your contact but still want to send a message to
      him/her?
    </p>
    <p>
      And that&apos;s where {appName} comes in. Just fill the fields and press &quot;Send Message&quot;
      button.
    </p>
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

    -webkit-box-shadow: 11px 0px 21px -11px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 11px 0px 21px -11px rgba(0, 0, 0, 0.4);
    box-shadow: 11px 0px 21px -11px rgba(0, 0, 0, 0.4);
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

  :global(.dark) .description {
    background-color: #131c21;
  }
</style>
