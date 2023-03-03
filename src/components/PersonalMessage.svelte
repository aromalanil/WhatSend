<script lang="ts">
  import MessageBox from './MessageBox.svelte';
  import PhoneInput from './PhoneInput.svelte';

  let error = '';
  let message = '';
  let phoneNumber = '';
  let isPhoneValid = false;

  const validateMessage = () => {
    if (message.length < 250) {
      return true;
    }
    error = 'Message can contain only upto 250 characters';
    return false;
  };

  const sendMessage = () => {
    if (!phoneNumber) {
      error = 'Please enter Phone Number';
      return;
    }
    if (isPhoneValid && validateMessage()) {
      const link = `https://api.whatsapp.com/send?phone=${phoneNumber}${
        message && `&text=${encodeURIComponent(message)}`
      }`;
      window.location.assign(link);
    }
  };
</script>

<div class="form-wrapper">
  <h2>Send Personal Message</h2>
  <p id="error">{error}</p>
  <label>
    Phone Number
    <PhoneInput bind:value={phoneNumber} bind:isPhoneValid />
  </label>
  <MessageBox name="Message" placeholder="Message (Optional)" bind:value={message} />

  <button type="submit" on:click={sendMessage} class="message-btn"> Send Message </button>
</div>
