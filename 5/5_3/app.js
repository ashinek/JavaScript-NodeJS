var fs  = require('fs');

var content = `<footer>
<div class="copy">
    <p>Copyright</p>
</div>
</footer>`;

fs.writeFile('footer.html',content,function(error){
    console.log('Plik został utworzony.')
});