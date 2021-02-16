const form = document.getElementById('form');
form.addEventListener('submit', test);

let submitButton = document.getElementById('textarea');
submitButton.addEventListener('keydown', enterKeySubmit);

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

function enterKeySubmit(e) {
  let currentKey = e.keyCode;
  if (currentKey === 13) {
    form.dispatchEvent(new Event('submit'));
  }
}

const textareaElement = document.getElementById('textarea');
textareaElement.addEventListener('keydown', replaceSpaceWithUnderscore);

function replaceSpaceWithUnderscore(e) {
  if(e.keyCode === 32) {
    e.preventDefault();
    textareaElement.value += '_';
  }
}