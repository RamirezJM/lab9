function init(){
  const button = document.getElementById('entrybutton');

  function showMeText(){
    const textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("RamirezJM: " + textbox.value);
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);