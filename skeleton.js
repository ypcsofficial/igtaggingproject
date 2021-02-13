const form = document.getElementById('form');
form.addEventListener('submit', test);

function test(e) {
  e.preventDefault();
  console.log(e)
  const hashtags = document.getElementById('hashtags');
  const textAreaValue = e.target[0].value;

  let tagsArray = textAreaValue.split(' ');
  for(let i = 0; i < tagsArray.length; i++) {
    tagsArray[i] = '#'+tagsArray[i];
    const hashtag = document.createElement('p'); 
    hashtag.textContent = tagsArray[i];
    hashtag.className = "testClass";
    hashtags.appendChild(hashtag);
  }
}