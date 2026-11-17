var names = ['John', 'Jane', 'Bob',, 'Mike'];
// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
for(let i=0;i<=names.length;i++){
    if(names[i]==undefined) delete names[i];
}