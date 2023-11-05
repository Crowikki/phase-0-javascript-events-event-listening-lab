function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert);
}

addingEventListener();
// don't forget to call the event listener to make it work
