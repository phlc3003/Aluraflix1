var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BNjcyYjg0M2ItMzMyZS00NmM1LTlhZDMtN2MxN2RhNWY4YTkwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDViMzBiNGMtZTIyNS00NzI4LWE3NDMtNmM1NDk0NzBlMWRlXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZTllMjI0ZGYtM2FmZC00ZmY4LTlkNTYtZThlOWQ1OGQyZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjYzOGE1MjUtODgyMy00ZDAxLTljYTgtNzk0Njg2YWQwMTZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNWEzOTNjNDgtZDhhYS00ODAxLWIzNGMtYjU3OGZhYmI3ZDU4XkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_UY268_CR1,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTYwNWNmM2UtNDhlOC00ZGQzLWI1MTMtMmZlMTFjM2Y1N2ZhXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeFilmes = ["O Som do Silêncio", "Bela Vingança", "Mank", "Os 7 de Chicago", "Meu Pai", "Nomadland", "Minari", "Judas e o Messias Negro"]

var sinopse = ["https://www.imdb.com/title/tt5363618/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt9620292/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt10618286/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt1070874/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt10272386/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt9770150/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt10633456/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt9784798/?ref_=nv_sr_srsg_0"]

for(var i = 0; i < listaFilmes.length; i++){
  document.write('<a href=' + sinopse[i] + '>' + "<img src=" + listaFilmes[i] + ">")
 

}

