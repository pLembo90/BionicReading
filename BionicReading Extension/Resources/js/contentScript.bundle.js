(()=>{const t="undefined"==typeof browser?chrome:browser;function n(t){return t.replace(/\p{L}+/gu,(t=>{const{length:n}=t;let e=1;n>3&&(e=Math.round(n/2));const a=t.slice(0,e),o=t.slice(e);return`<br-bold class="br-bold">${function(t){const n=Math.round(.33*t.length);if(0===n)return`<br-fixation fixation-strength="1">${t}</br-fixation>`;const e=t.substring(0,n),a=t.substring(t.length-n,t.length),o=`<br-fixation fixation-strength="1">${e}</br-fixation>`,i=`<br-fixation fixation-strength="3">${a}</br-fixation>`,s=t.length-2*n>0?`<br-fixation fixation-strength="2">${t.substring(n,t.length-n)}</br-fixation>`:"";return o+s+i}(a)}</br-bold>${o}`}))}const e=t=>{console.time("ToggleReading-Time");const e=document.getElementsByTagName("br-bold");e.length<1&&(function(){const t=document.createElement("style");t.textContent='\n    .br-bold[fixation-strength="1"] :is(\n      [saccades-interval="0"] br-bold [fixation-strength="1"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="1"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="1"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="1"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="1"]\n      ) { \n      font-weight: bold !important; display: inline; line-height: var(--br-line-height,initial); \n    }\n\n    .br-bold[fixation-strength="2"] :is(\n      [saccades-interval="0"] br-bold [fixation-strength="1"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="1"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="1"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="1"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="1"],\n\n      [saccades-interval="0"] br-bold [fixation-strength="2"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="2"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="2"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="2"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="2"]\n      ) { \n      font-weight: bold !important; display: inline; line-height: var(--br-line-height,initial); \n    }\n\n    .br-bold[fixation-strength="3"] :is(\n\n      [saccades-interval="0"] br-bold [fixation-strength="1"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="1"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="1"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="1"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="1"],\n      \n      [saccades-interval="0"] br-bold [fixation-strength="2"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="2"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="2"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="2"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="2"]\n      ,\n      [saccades-interval="0"] br-bold [fixation-strength="3"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="3"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="3"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="3"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="3"]\n      ) { \n      font-weight: bold !important; display: inline; line-height: var(--br-line-height,initial); \n    }\n    ',document.head.appendChild(t)}(),function(){const t=new DOMParser;["p","font","span","li"].forEach((e=>{for(const a of document.getElementsByTagName(e)){const e=t.parseFromString(a.innerHTML,"text/html"),o=Array.from(e.body.childNodes).map((t=>t.nodeType===Node.TEXT_NODE?n(t.nodeValue):t.outerHTML));a.innerHTML=o.join(" ")}}))}()),document.body.classList.contains("br-bold")||!1===t?document.body.classList.remove("br-bold"):(document.body.classList.contains("br-bold")||document.body.classList.add("br-bold"),t&&document.body.classList.add("br-bold"),e.length,console.timeEnd("ToggleReading-Time"))},a=(t,n,a)=>{switch(console.log("Got message in content script as =>",t,n),t.type){case"getBrMode":a({data:document.body.classList.contains("br-bold")});break;case"toggleReadingMode":e();break;case"getFixationStrength":a({data:document.body.getAttribute("fixation-strength")});break;case"setFixationStrength":document.body.setAttribute("fixation-strength",t.data),a({success:!0});break;case"setReadingMode":e(t.data);break;case"setSaccadesIntervalInDOM":{const n=null==t.data?0:t.data;document.body.setAttribute("saccades-interval",n);break}case"setlineHeight":{const{action:n}=t,{step:e}=t,a="--br-line-height";let o=document.body.style.getPropertyValue(a);switch(n){case"lineHeightdecrease":o=/\d+/.test(o)&&o>1?Number(o)-e:o;break;case"lineHeightIncrease":o=/\d+/.test(o)?Number(o):1,o+=e;break;case"lineHeightReset":o=""}/\d+/.test(o)?document.body.style.setProperty(a,o):document.body.style.removeProperty(a);break}default:console.log("Error: not found",t)}};var o;o=async()=>{t.runtime.onMessage.addListener(a),chrome.runtime.sendMessage({message:"getToggleOnDefault"},(t=>{["true",!0].includes(t.data)&&e("true"===t.data)})),chrome.runtime.sendMessage({message:"getSaccadesInterval"},(t=>{const n=void 0===t||null==t.data?0:t.data;document.body.setAttribute("saccades-interval",n)})),chrome.runtime.sendMessage({message:"getFixationStrength"},(t=>{const n=void 0===t||null==t.data?3:t.data;document.body.setAttribute("fixation-strength",n)}))},"complete"===document.readyState||"interactive"===document.readyState?setTimeout(o,1):document.addEventListener("DOMContentLoaded",o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUJxQixPQXpGMUIsYUFBeEIvRCxTQUFTZ0UsWUFDa0IsZ0JBQXhCaEUsU0FBU2dFLFdBR1pDLFdBQVdYLEVBQUksR0FFZnRELFNBQVNrRSxpQkFBaUIsbUJBQW9CWixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRlbnRTY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcnVuVGltZUhhbmRsZXIgPSB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyBjaHJvbWUgOiBicm93c2VyO1xuXG5jb25zdCBGSVhBVElPTl9CUkVBS19SQVRJTyA9IDAuMzM7XG5jb25zdCBGSVhBVElPTl9MT1dFUl9CT1VORCA9IDA7XG5jb25zdCBERUZBVUxUX1NBQ0NBREVTX0lOVEVSVkFMID0gMDtcbmNvbnN0IERFRkFVTFRfRklYQVRJT05fU1RSRU5HVEggPSAzO1xuLy8gbWFraW5nIGhhbGYgb2YgdGhlIGxldHRlcnMgaW4gYSB3b3JkIGJvbGRcbmZ1bmN0aW9uIGhpZ2hsaWdodFRleHQoc2VudGVuY2VUZXh0KSB7XG4gIHJldHVybiBzZW50ZW5jZVRleHRcbiAgICAucmVwbGFjZSgvXFxwe0x9Ky9ndSwgKHdvcmQpID0+IHtcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB3b3JkO1xuICAgICAgbGV0IG1pZFBvaW50ID0gMTtcbiAgICAgIGlmIChsZW5ndGggPiAzKSBtaWRQb2ludCA9IE1hdGgucm91bmQobGVuZ3RoIC8gMik7XG4gICAgICBjb25zdCBmaXJzdEhhbGYgPSB3b3JkLnNsaWNlKDAsIG1pZFBvaW50KTtcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSB3b3JkLnNsaWNlKG1pZFBvaW50KTtcbiAgICAgIGNvbnN0IGh0bWxXb3JkID0gYDxici1ib2xkIGNsYXNzPVwiYnItYm9sZFwiPiR7bWFrZUZpeGF0aW9ucyhmaXJzdEhhbGYpfTwvYnItYm9sZD4ke3NlY29uZEhhbGZ9YDtcbiAgICAgIHJldHVybiBodG1sV29yZDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUZpeGF0aW9ucygvKiogQHR5cGUgc3RyaW5nICovIHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGZpeGF0aW9uV2lkdGggPSBNYXRoLnJvdW5kKHRleHRDb250ZW50Lmxlbmd0aCAqIEZJWEFUSU9OX0JSRUFLX1JBVElPKTtcblxuICBpZiAoZml4YXRpb25XaWR0aCA9PT0gRklYQVRJT05fTE9XRVJfQk9VTkQpIHJldHVybiBgPGJyLWZpeGF0aW9uIGZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiPiR7dGV4dENvbnRlbnR9PC9ici1maXhhdGlvbj5gO1xuXG4gIGNvbnN0IHN0YXJ0ID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIGZpeGF0aW9uV2lkdGgpO1xuICBjb25zdCBlbmQgPSB0ZXh0Q29udGVudC5zdWJzdHJpbmcoKHRleHRDb250ZW50Lmxlbmd0aCkgLSBmaXhhdGlvbldpZHRoLCB0ZXh0Q29udGVudC5sZW5ndGgpO1xuXG4gIGNvbnN0IHdlYWtGaXhhdGlvbiA9IGA8YnItZml4YXRpb24gZml4YXRpb24tc3RyZW5ndGg9XCIxXCI+JHtzdGFydH08L2JyLWZpeGF0aW9uPmA7XG4gIGNvbnN0IHN0cm9uZ0ZpeGF0aW9uID0gYDxici1maXhhdGlvbiBmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIj4ke2VuZH08L2JyLWZpeGF0aW9uPmA7XG4gIGNvbnN0IG1pbGRGaXhhdGlvbiA9ICgodGV4dENvbnRlbnQubGVuZ3RoIC0gKGZpeGF0aW9uV2lkdGggKiAyKSkgPiAwKVxuICAgID8gYDxici1maXhhdGlvbiBmaXhhdGlvbi1zdHJlbmd0aD1cIjJcIj4ke3RleHRDb250ZW50LnN1YnN0cmluZyhmaXhhdGlvbldpZHRoLCAodGV4dENvbnRlbnQubGVuZ3RoKSAtIGZpeGF0aW9uV2lkdGgpfTwvYnItZml4YXRpb24+YCA6ICcnO1xuXG4gIHJldHVybiB3ZWFrRml4YXRpb24gKyBtaWxkRml4YXRpb24gKyBzdHJvbmdGaXhhdGlvbjtcbn1cblxuZnVuY3Rpb24gcGFyc2VEb2N1bWVudCgpIHtcbiAgY29uc3QgdGFncyA9IFsncCcsICdmb250JywgJ3NwYW4nLCAnbGknXTtcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpKSB7XG4gICAgICBjb25zdCBuID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhlbGVtZW50LmlubmVySFRNTCwgJ3RleHQvaHRtbCcpO1xuICAgICAgY29uc3QgdGV4dEFyclRyYW5zZm9ybWVkID0gQXJyYXkuZnJvbShuLmJvZHkuY2hpbGROb2RlcykubWFwKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHJldHVybiBoaWdobGlnaHRUZXh0KG5vZGUubm9kZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZS5vdXRlckhUTUw7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dEFyclRyYW5zZm9ybWVkLmpvaW4oJyAnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBUb2dnbGVSZWFkaW5nID0gKGVuYWJsZVJlYWRpbmcpID0+IHtcbiAgY29uc29sZS50aW1lKCdUb2dnbGVSZWFkaW5nLVRpbWUnKTtcbiAgY29uc3QgYm9sZGVkRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnItYm9sZCcpO1xuXG4gIGlmIChib2xkZWRFbGVtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgYWRkU3R5bGVzKCk7XG4gICAgcGFyc2VEb2N1bWVudCgpO1xuICB9XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdici1ib2xkJykgfHwgZW5hYmxlUmVhZGluZyA9PT0gZmFsc2UpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JyLWJvbGQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdici1ib2xkJykpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JyLWJvbGQnKTtcbiAgfVxuXG4gIGlmIChlbmFibGVSZWFkaW5nKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JyLWJvbGQnKTtcblxuICBpZiAoYm9sZGVkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnNvbGUudGltZUVuZCgnVG9nZ2xlUmVhZGluZy1UaW1lJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS50aW1lRW5kKCdUb2dnbGVSZWFkaW5nLVRpbWUnKTtcbn07XG5cbmNvbnN0IG9uQ2hyb21lUnVudGltZU1lc3NhZ2UgPSAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coJ0dvdCBtZXNzYWdlIGluIGNvbnRlbnQgc2NyaXB0IGFzID0+JywgbWVzc2FnZSwgc2VuZGVyKTtcbiAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICBjYXNlICdnZXRCck1vZGUnOlxuICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyLWJvbGQnKSB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZ2dsZVJlYWRpbmdNb2RlJzoge1xuICAgICAgVG9nZ2xlUmVhZGluZygpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2dldEZpeGF0aW9uU3RyZW5ndGgnOiB7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhOiBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZml4YXRpb24tc3RyZW5ndGgnKSB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdzZXRGaXhhdGlvblN0cmVuZ3RoJzoge1xuICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2ZpeGF0aW9uLXN0cmVuZ3RoJywgbWVzc2FnZS5kYXRhKTtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnc2V0UmVhZGluZ01vZGUnOiB7XG4gICAgICBUb2dnbGVSZWFkaW5nKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnc2V0U2FjY2FkZXNJbnRlcnZhbEluRE9NJzoge1xuICAgICAgY29uc3Qgc2FjY2FkZXNJbnRlcnZhbCA9IG1lc3NhZ2UuZGF0YSA9PSBudWxsID8gMCA6IG1lc3NhZ2UuZGF0YTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdzYWNjYWRlcy1pbnRlcnZhbCcsIHNhY2NhZGVzSW50ZXJ2YWwpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ3NldGxpbmVIZWlnaHQnOiB7XG4gICAgICBjb25zdCB7IGFjdGlvbiB9ID0gbWVzc2FnZTtcbiAgICAgIGNvbnN0IHsgc3RlcCB9ID0gbWVzc2FnZTtcbiAgICAgIGNvbnN0IExJTkVfSEVJR0hUX0tFWSA9ICctLWJyLWxpbmUtaGVpZ2h0JztcbiAgICAgIGxldCBjdXJyZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKExJTkVfSEVJR0hUX0tFWSk7XG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdsaW5lSGVpZ2h0ZGVjcmVhc2UnOlxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAvXFxkKy8udGVzdChjdXJyZW50SGVpZ2h0KSAmJiBjdXJyZW50SGVpZ2h0ID4gMSA/IE51bWJlcihjdXJyZW50SGVpZ2h0KSAtIHN0ZXAgOiBjdXJyZW50SGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2xpbmVIZWlnaHRJbmNyZWFzZSc6XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IC9cXGQrLy50ZXN0KGN1cnJlbnRIZWlnaHQpID8gTnVtYmVyKGN1cnJlbnRIZWlnaHQpIDogMTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHN0ZXA7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbGluZUhlaWdodFJlc2V0JzpcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gJyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICgvXFxkKy8udGVzdChjdXJyZW50SGVpZ2h0KSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KExJTkVfSEVJR0hUX0tFWSwgY3VycmVudEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KExJTkVfSEVJR0hUX0tFWSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogbm90IGZvdW5kJywgbWVzc2FnZSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZnVuY3Rpb24gZG9jUmVhZHkoZm4pIHtcbiAgLy8gc2VlIGlmIERPTSBpcyBhbHJlYWR5IGF2YWlsYWJsZVxuICBpZiAoXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJ1xuICAgIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZSdcbiAgKSB7XG4gICAgLy8gY2FsbCBvbiBuZXh0IGF2YWlsYWJsZSB0aWNrXG4gICAgc2V0VGltZW91dChmbiwgMSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXMoKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgLmJyLWJvbGRbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdIDppcyhcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjBcIl0gYnItYm9sZCBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLCBcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjFcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgybisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMlwiXSBici1ib2xkOm50aC1vZi10eXBlKDNuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjFcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIzXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNG4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjRcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg1bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdXG4gICAgICApIHsgXG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyBkaXNwbGF5OiBpbmxpbmU7IGxpbmUtaGVpZ2h0OiB2YXIoLS1ici1saW5lLWhlaWdodCxpbml0aWFsKTsgXG4gICAgfVxuXG4gICAgLmJyLWJvbGRbZml4YXRpb24tc3RyZW5ndGg9XCIyXCJdIDppcyhcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjBcIl0gYnItYm9sZCBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLCBcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjFcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgybisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMlwiXSBici1ib2xkOm50aC1vZi10eXBlKDNuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjFcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIzXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNG4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjRcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg1bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIwXCJdIGJyLWJvbGQgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSwgXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIxXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoMm4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjJcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgzbisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIyXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiM1wiXSBici1ib2xkOm50aC1vZi10eXBlKDRuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjJcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCI0XCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNW4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXVxuICAgICAgKSB7IFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgZGlzcGxheTogaW5saW5lOyBsaW5lLWhlaWdodDogdmFyKC0tYnItbGluZS1oZWlnaHQsaW5pdGlhbCk7IFxuICAgIH1cblxuICAgIC5ici1ib2xkW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiM1wiXSA6aXMoXG5cbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjBcIl0gYnItYm9sZCBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLCBcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjFcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgybisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMlwiXSBici1ib2xkOm50aC1vZi10eXBlKDNuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjFcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIzXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNG4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjRcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg1bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIwXCJdIGJyLWJvbGQgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSwgXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIxXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoMm4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjJcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgzbisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIyXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiM1wiXSBici1ib2xkOm50aC1vZi10eXBlKDRuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjJcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCI0XCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNW4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXVxuICAgICAgLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMFwiXSBici1ib2xkIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIl0sIFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMVwiXSBici1ib2xkOm50aC1vZi10eXBlKDJuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIyXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoM24rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiM1wiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjNcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg0bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIzXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiNFwiXSBici1ib2xkOm50aC1vZi10eXBlKDVuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIl1cbiAgICAgICkgeyBcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7IGRpc3BsYXk6IGlubGluZTsgbGluZS1oZWlnaHQ6IHZhcigtLWJyLWxpbmUtaGVpZ2h0LGluaXRpYWwpOyBcbiAgICB9XG4gICAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmRvY1JlYWR5KGFzeW5jICgpID0+IHtcbiAgcnVuVGltZUhhbmRsZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25DaHJvbWVSdW50aW1lTWVzc2FnZSk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgeyBtZXNzYWdlOiAnZ2V0VG9nZ2xlT25EZWZhdWx0JyB9LFxuICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFbJ3RydWUnLCB0cnVlXS5pbmNsdWRlcyhyZXNwb25zZS5kYXRhKSkgcmV0dXJuO1xuICAgICAgVG9nZ2xlUmVhZGluZyhyZXNwb25zZS5kYXRhID09PSAndHJ1ZScpO1xuICAgIH0sXG4gICk7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgIHsgbWVzc2FnZTogJ2dldFNhY2NhZGVzSW50ZXJ2YWwnIH0sXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBzYWNjYWRlc0ludGVydmFsID0gcmVzcG9uc2UgPT09IHVuZGVmaW5lZCB8fCByZXNwb25zZS5kYXRhID09IG51bGxcbiAgICAgICAgPyBERUZBVUxUX1NBQ0NBREVTX0lOVEVSVkFMIDogcmVzcG9uc2UuZGF0YTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdzYWNjYWRlcy1pbnRlcnZhbCcsIHNhY2NhZGVzSW50ZXJ2YWwpO1xuICAgIH0sXG4gICk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgeyBtZXNzYWdlOiAnZ2V0Rml4YXRpb25TdHJlbmd0aCcgfSxcbiAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGZpeGF0aW9uU3RyZW5ndGggPSByZXNwb25zZSA9PT0gdW5kZWZpbmVkIHx8IHJlc3BvbnNlLmRhdGEgPT0gbnVsbFxuICAgICAgICA/IERFRkFVTFRfRklYQVRJT05fU1RSRU5HVEggOiByZXNwb25zZS5kYXRhO1xuICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2ZpeGF0aW9uLXN0cmVuZ3RoJywgZml4YXRpb25TdHJlbmd0aCk7XG4gICAgfSxcbiAgKTtcbn0pO1xuIl0sIm5hbWVzIjpbInJ1blRpbWVIYW5kbGVyIiwiYnJvd3NlciIsImNocm9tZSIsImhpZ2hsaWdodFRleHQiLCJzZW50ZW5jZVRleHQiLCJyZXBsYWNlIiwid29yZCIsImxlbmd0aCIsIm1pZFBvaW50IiwiTWF0aCIsInJvdW5kIiwiZmlyc3RIYWxmIiwic2xpY2UiLCJzZWNvbmRIYWxmIiwidGV4dENvbnRlbnQiLCJmaXhhdGlvbldpZHRoIiwic3RhcnQiLCJzdWJzdHJpbmciLCJlbmQiLCJ3ZWFrRml4YXRpb24iLCJzdHJvbmdGaXhhdGlvbiIsIm1pbGRGaXhhdGlvbiIsIm1ha2VGaXhhdGlvbnMiLCJUb2dnbGVSZWFkaW5nIiwiZW5hYmxlUmVhZGluZyIsImNvbnNvbGUiLCJ0aW1lIiwiYm9sZGVkRWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYWRkU3R5bGVzIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZm9yRWFjaCIsInRhZyIsImVsZW1lbnQiLCJuIiwicGFyc2VGcm9tU3RyaW5nIiwiaW5uZXJIVE1MIiwidGV4dEFyclRyYW5zZm9ybWVkIiwiQXJyYXkiLCJmcm9tIiwiYm9keSIsImNoaWxkTm9kZXMiLCJtYXAiLCJub2RlIiwibm9kZVR5cGUiLCJOb2RlIiwiVEVYVF9OT0RFIiwibm9kZVZhbHVlIiwib3V0ZXJIVE1MIiwiam9pbiIsInBhcnNlRG9jdW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInRpbWVFbmQiLCJvbkNocm9tZVJ1bnRpbWVNZXNzYWdlIiwibWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxvZyIsInR5cGUiLCJkYXRhIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic3VjY2VzcyIsInNhY2NhZGVzSW50ZXJ2YWwiLCJhY3Rpb24iLCJzdGVwIiwiTElORV9IRUlHSFRfS0VZIiwiY3VycmVudEhlaWdodCIsImdldFByb3BlcnR5VmFsdWUiLCJ0ZXN0IiwiTnVtYmVyIiwic2V0UHJvcGVydHkiLCJyZW1vdmVQcm9wZXJ0eSIsImZuIiwiYXN5bmMiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJzZW5kTWVzc2FnZSIsInJlc3BvbnNlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJmaXhhdGlvblN0cmVuZ3RoIiwicmVhZHlTdGF0ZSIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==