export default function backBuild({ imgSrc, ogSentence, translatedSentence, audio }) {
  return `
  <style>



/* FIX FOR ANKI STACKING */
.front-wrapper, hr#answer {
  display: none !important
}

.listening_info {
font-size: 14px
color: grey}
/* CARD */
.card {
  font-family: arial
  font-size: 20px
  text-align: center
  color: black
  background-color: rgba(0, 0, 0, 0.01)
}

.sentence-card {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
  max-width: 600px
  margin: 2rem auto
  padding: 2rem
  background: linear-gradient(to bottom right, #ffffff, #f8f9fa)
  border-radius: 16px
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 15px rgba(0, 0, 0, 0.03)
  display: flex
  flex-direction: column
  gap: 8px
}

  .nightMode .sentence-card {
    background: linear-gradient(to bottom right, rgba(250, 250, 250, 0), rgba(0, 0, 0, 0.4))
  }



@media screen and (max-width: 600px) {
  .card {
    margin: 0
  }

  .sentence-card {
    padding-left: 6px
    padding-right: 6px
    margin-top: 0
  }
}

/* OTHER */
.vocabulary-container {
  margin: 10px 0
  line-height: 26px
}

.audio-container {
  transform: scale(0.7)
}


.sentence-container {
  position: relative
}

.title {
  color: #1a1a1a
  margin: 0
  line-height: 1.3
  position: relative
  padding-bottom: 0.5rem
}


.translation:after {
  content: ''
  position: absolute
  bottom: -18px
  left: 50%
  transform: translateX(-50%)
  width: 80px
  height: 3px
  background: linear-gradient(to right, #3b82f6, #60a5fa)
  border-radius: 3px
}


.title h3 {
  font-size: 1.75rem
  font-weight: 600
  margin-bottom: 0
}


.nightMode h3 {
  color: white
}


.nightMode .translation {
  color: #a3a3a3
}

.translation {
  margin-top: 0
  position: relative
  color: #757575
}

.vocabulary-container ul {
  display: flex
  flex-direction: column
  gap: 16px
  font-size: 16px



}

.vocabulary-container li {
  list-style: none
  margin-left: -20px

}

.word {
  font-weight: 700
  padding: 4px 7px
  border-radius: 5px
  color: rgb(109, 117, 136)
  background: rgba(0, 0, 0, .06)

}

.nightMode .word {
  background: rgba(250, 250, 250, .06)

}


.conjugation-table {
  width: 100%
  border-collapse: separate
  border-spacing: 0
  margin: 20px 0
  background: white
  border-radius: 8px
  overflow: hidden
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05)
  font-size: 16px
  margin-top: 0
}

.conjugation-table th,
.conjugation-table td {
  padding: 12px 15px
  text-align: left
  border-bottom: 1px solid #f1f1f1
}

.conjugation-table th {
  background: rgba(115, 206, 157, .1)
  color: #73ce9d
  font-weight: 600
  font-size: 0.9em
  text-transform: uppercase
}

.tag-verb {
  font-weight: 700
  padding: 3px 6px
  border-radius: 5px
  color: #73ce9d
  background: rgba(115, 206, 157, .1)
  font-size: 16px
}



.callout {
  padding: 20px 30px 20px 45px
  border-radius: 15px
  background-color: rgba(102, 166, 232, .1)
  color: #353d44
  margin-bottom: 16px
  position: relative
  text-align: left
  font-size: 18px
}


.callout::before {
  content: ''
  height: 24px
  width: 24px

  position: absolute
  left: 12px
  top: 12px
  background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%233b82f6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide%20lucide-info%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M12%2016v-4%22%2F%3E%3Cpath%20d%3D%22M12%208h.01%22%2F%3E%3C%2Fsvg%3E)
}

.nightMode .callout {
  color: #b8b8b8
}



/* CONJUGATIONS */
summary {
  list-style: none
  margin-top: 12px
}

summary .show-conjugations-button {
  border-radius: 18px
  font-size: 13px
  font-weight: 700
  padding: 8px 20px
}

.conjugations-container {
  display: flex
  margin-top: 24px
  flex-direction: column
  padding: 4px 16px
  background-color: rgba(0, 0, 0, 0.02)
  border-radius: 12px
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 15px rgba(0, 0, 0, 0.03)
}

.nightMode .conjugations-container {
  background-color: rgba(250, 250, 250, 0.05)

}

.conjugation-verb-button-container {
  position: relative
}

.conjugation-tense-button-container {
  margin: 0
}

.conjugation-verb-button-container:after {
  content: ''
  position: absolute
  bottom: -1px
  left: 50%
  transform: translateX(-50%)
  width: 80px
  height: 1px
  background: linear-gradient(to right, #3b82f6, #60a5fa)
  border-radius: 3px

}

.conjugation-verb-button-container ul,
.conjugation-tense-button-container ul {
  display: flex
  flex-direction: row
  list-style: none
  justify-content: center
  align-items: center
  padding: 0
  margin: 0

}


.conjugation-verb-button-container li,
.conjugation-tense-button-container li {
  margin: 0
  padding: 0

}

.conjugation-verb-button-container li .verb-button,
.conjugation-tense-button-container li .tense-button {
  padding: 6px 12px
  font-weight: 700
  border-radius: 8px
  border: none
  font-size: 16px
}

.conjugation-verb-button-container li .verb-button {
  color: #73ce9d
  background: rgba(115, 206, 157, .1)
  transition: all 0.2s ease
  /* Smooth transition */
}






.conjugation-verb-button-container li .verb-button.blue {
  background-color: rgba(102, 166, 232, .1)
  color: #66a9e8
}

.conjugation-verb-button-container li .verb-button.blue:hover {
  background: rgba(102, 166, 232, .2)
  color: #4d8ed0
  transform: translateY(-1px)
  cursor: pointer
}


.conjugation-tense-button-container ul {
  justify-content: start
}

.conjugation-tense-button-container li .tense-button {
  color: #ed7989
  background: rgba(235, 123, 138, .1)


}



.show-conjugations-button {
  margin: auto
  background: linear-gradient(to right, #3b82f6, #60a5fa)
  width: 160px
  font-weight: 600
  padding: 8px
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 15px rgba(0, 0, 0, 0.03)
  margin-bottom: 12px
  color: white
  transition: all 0.3s ease
  /* Smooth transition for hover effects */
}

.show-conjugations-button:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08),
    0 12px 18px rgba(0, 0, 0, 0.06)
  /* Larger shadow on hover */
  background: linear-gradient(to right, #2563eb, #3b82f6)
  /* Slightly darker gradient */
  cursor: pointer
  /* Changes cursor to pointer on hover */
}





.tag-tense {
  font-weight: 700
  padding: 3px 6px
  border-radius: 5px
  color: #ed7989
  background: rgba(235, 123, 138, .1)
  font-size: 16px
}

.tag {
  font-weight: 700
  padding: 3px 6px
  border-radius: 5px
  color: rgb(139, 147, 156)
  background: rgba(0, 0, 0, .06)
  font-size: 16px
}

.nightMode .tag {
  background: rgba(250, 250, 250, .06)



}

.nightMode {
  .conjugation-table {

    background: #1e1e1e

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3)
  }

  .conjugation-table th,
  .conjugation-table td {

    border-bottom: 1px solid #2a2a2a
  }

  .conjugation-table th {
    background: rgba(115, 206, 157, 0.2)
    color: #73ce9d
  }


  .conjugation-table td {
    font-weight: 500
    color: #d1d5db
    background: rgba(250,250,250,0.03)

  }
}


/* CONJUGATIONS TABLES */
.conjugation-verb-button-container {
  position: relative
}

.conjugation-verb-button-container:after {
  content: ''
  position: absolute
  bottom: -1px
  left: 50%
  transform: translateX(-50%)
  width: 30px
  height: 2px
  background: linear-gradient(to right, #3b82f6, #60a5fa)
  border-radius: 3px

}


.conjugation-verb-button-container {
padding-top: 18px
margin-bottom: 8px
}

.conjugation-verb-button {
  background: linear-gradient(to right, #3b82f6 30%, #60a5fa 60%, #60a5fa 100%)

  -webkit-background-clip: text
  		background-clip: text
  			color: transparent
            font-weight: bold
font-size: 18px
border-radius: 4px
padding: 4px 12px
max-width: fit-content
margin: auto
}


.conjugation-tense-button-container .tense-button {
  padding: 6px 12px
  font-weight: 700
  border-radius: 8px
  border: none
  font-size: 16px
max-width: fit-content
margin-left: auto
margin-right: auto
}

.conjugation-tense-button-container .tense-button {
  color: #ed7989
  background: rgba(235, 123, 138, .1)


}



.conjugation-tense-button-container {
margin-top: 20px
margin-bottom: 10px}

.conjugation-tense-button {
background: rgba(0, 0, 0, 0.1)
border: none
padding: 8px 20px
display: block
max-width: fit-content
border-radius: 16px
font-size: 14px
font-weight: bold
margin: auto
  color: #ed7989
}


/* TAGS */
.tag {
  font-weight: 700
  padding: 3px 6px
  border-radius: 5px
  font-size: 16px
}

.tag-amber {
  color: rgb(217, 119, 6)
  background: rgba(245, 158, 11, .1)
}

.nightMode .tag-amber {
  color: rgb(252, 211, 77)
  background: rgba(245, 158, 11, .15)
}

.tag-rose {
  color: rgb(190, 24, 93)
  background: rgba(219, 39, 119, .1)
}

.nightMode .tag-rose {
  color: rgb(251, 113, 133)
  background: rgba(219, 39, 119, .15)
}

.tag-teal {
  color: rgb(13, 148, 136)
  background: rgba(20, 184, 166, .1)
}

.nightMode .tag-teal {
  color: rgb(94, 234, 212)
  background: rgba(20, 184, 166, .15)
}

.tag-blue {
  color: rgb(37, 99, 235)
  background: rgba(59, 130, 246, .1)
}

.nightMode .tag-blue {
  color: rgb(96, 165, 250)
  background: rgba(59, 130, 246, .15)
}

.tag-purple {
  color: rgb(147, 51, 234)
  background: rgba(168, 85, 247, .1)
}

.nightMode .tag-purple {
  color: rgb(192, 132, 252)
  background: rgba(168, 85, 247, .15)
}

/* FOOTER */
.footer {
  opacity: 0.4
  transition: all 0.2s ease
}

.nightMode .footer {
  filter: invert(1)
}

.footer:hover {
  opacity: 1
}

.callout {
font-size: 16px
}
.nightMode .callout {
color: rgb(248,248,248)
}

.nightMode .callout i {
  color: #a3a3a3
}

.callout ul {
padding-left: 26px
}

/* less space when mobile */
.callout ul li {
margin-bottom: 8px
padding-left: 4px
}


.image-container {
  margin: auto
max-width: 250px

}

.image-container img {
	width: 100%
object-fit: cover
height: 100%
min-height: 100%
  border-radius: 12px
  overflow: hidden
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)

}

</style>
<div class="sentence-card">



<div class="image-container">
<img src="${imgSrc}">
</div>


<div class="listening_info">(Listening comprehension card)</div>
		<div class="sentence-container">
			<div class="audio-container">
				${audio}
			</div>
			<h3 class="title">${ogSentence}</h3>
		</div>

		<p class="translation">
			${translatedSentence}
		</p>

	



</div>


<div class="footer">
	<a href="https://github.com/artur-bertash/Oubl">
		<img src="oubl_logo.png" height="50">
	</a>
</div>












    `
}