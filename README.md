# Skolprojekt "Frontendramverk"

Syftet med projektet var att lära sig ett nytt ramverk som man inte har jobbat med förut.

## Frontend ramverk

Inspirerad ifrån [stateofjs](https://stateofjs.com) valde jag ett av de listade ramverken - Vue och skapade en enklare variant av sidan med det valda ramverket. 

![Example](https://user-images.githubusercontent.com/17639389/210244688-34d58e7d-1c6c-4c43-a3ec-e01f89dd7abd.jpg)

Jag byggde en hemsida utifrån bilden ovan och uppgiftbeskrivning i det valda ramverket.  

## Installation & Utveckling

1. Jag skapade ett projekt med hjälp av: `npm init vite` och valde Vue och JavaScript. 
Eftersom projektmappen redan innehåller filer behövde jag initiera ramverkskoden i en egen mapp och sedan flytta alla filerna till rooten i mitt egna projekt för att undvika att filer (README.md, .git) tas bort.
2. Jag har skapat `.npmrc` filen.
3. Jag har lagt till paketet med testerna i mitt projekt `npm i -D @plugga-tech/frontend-framework`.
4. Jag körde `npx plugga init` för att kopiera in testerna och nödvändiga filer till rooten av mitt projekt.
5. Jag säkerställde att det finns ett `dev` skript i min package.json och att dev-server'n startar på port `5173`.
6. Jag körde testerna med kommandot `npx plugga test` direkt via terminalen. 
Man kan lägga till det som ett test-skript i package.json fil så man kan köra det med `npm test` istället.
7. Jag skrev koden med Vue ramverk.
8. Nya uppdateringar till testerna i uppgiften körde jag med `npx plugga update` för att hämta hem det senaste.

### Lista av data-cy som finns i koden

- `data-cy="chart"` diagrammet över ramverken och dess data.
- `data-cy="chart-header-cell"` varje cell i övre delen av diagrammet som visar åren (2016-2022).
- `data-cy="chart-data-cell"` varje cell i nedre delen av diagrammet som visar ramverken (även tomma).
- `data-cy="chart-circle"` värdet som visas i en cell - en färgad cirkel med en procentsats.


### Gjorda krav för Godkänt

- [+] Uppgiften har lämnats in i tid (Kod & Presentation).
- [+] Readmefilen har uppdaterats enligt beskrivning ovan.
- [+] Git och GitHub har använts.
- [+] Sidan innehåller en header, footer och main.
- [+] Sidan är responsiv.
- [+] Sidan visar "retention" informationen som finns i [data filen](./data/index.js) i enlighet med bilden ovan.


### Gjorda krav för Väl Godkänt

- [+] Sidan använder klient-routing för att gå till /retention när användaren besöker startsidan.
- [+] Sidan använder klient-routing för att gå till /retention när användaren klickar på länken i footern.
- [] Sidan använder klient-routing för att gå till /interest när användaren klickar på länken i footern.
- [] Sidan använder klient-routing för att gå till /usage när användaren klickar på länken i footern.
- [] Sidan använder klient-routing för att gå till /awareness när användaren klickar på länken i footern.





# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.



