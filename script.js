const shareOption = document.querySelector('.share_option');
document.querySelector('.share_button').addEventListener('click', function(){
    this.classList.toggle('active');
    shareOption.classList.toggle('active');
});