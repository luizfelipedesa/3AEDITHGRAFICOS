const url = https://github.com/luizfelipedesa/3AEDITHGRAFICOS?tab=readme-ov-file#3aedithgraficos

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados await res.json()
    const paragrafo document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
   paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)

const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
  }
  
  vizualizarInformacoesGlobais()