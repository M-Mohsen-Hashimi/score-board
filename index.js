let home_score = document.getElementById('home-score')
let guest_score = document.getElementById('guest-score')
let home_score_amount = document.getElementById('home-score').textContent
let guest_score_amount = document.getElementById('guest-score').textContent
let home_num = Number(home_score_amount)
let guest_num = Number(guest_score_amount)


function increaseHomeScore(num) {
  home_num += num
  home_score.textContent = home_num;
}
function increaseGuestScore(num) {
  guest_num += num
  guest_score.textContent = guest_num;
}
function newHomeGame() {
  home_num = 0
  home_score.textContent = home_num
}
function newGuestGame() {
  guest_num = 0
  guest_score.textContent = guest_num;
}