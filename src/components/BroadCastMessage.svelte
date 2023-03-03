<script lang="ts">
  import MessageBox from './MessageBox.svelte';
  import MessageList from './MessageList.svelte';
  import { getPhoneNumberArray } from '../utils/input';

  let error = '';
  let message = '';
  let phoneNumbers = '';
  let startMessaging = false;
  let phoneNumberArray: string[] = [];

  const stopMessaging = () => {
    startMessaging = false;
  };

  const startSendingMessage = () => {
    error = '';
    try {
      if (phoneNumbers.trim() === '') throw new Error('Phone Numbers cannot be empty');
      if (message.trim() === '') throw new Error('Message cannot be empty');

      phoneNumberArray = getPhoneNumberArray(phoneNumbers);
      startMessaging = true;
    } catch (err) {
      if (err instanceof Error) error = err.message;
    }
  };
</script>

<div class="form-wrapper">
  <h2>Send Broadcast Messages</h2>
  <p id="error">{error}</p>

  <MessageBox
    isSmall
    name="Phone Numbers"
    placeholder="Enter all mobile numbers separated by comma"
    bind:value={phoneNumbers}
  />

  <MessageBox isSmall name="Message" placeholder="Message" bind:value={message} />

  <button type="submit" class="message-btn" on:click={startSendingMessage}>
    Start Messaging
  </button>

  {#if startMessaging}
    <MessageList on:stop={stopMessaging} phoneNumbers={phoneNumberArray} {message} />
  {/if}
</div>
