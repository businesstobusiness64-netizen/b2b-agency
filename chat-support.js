// WhatsApp floating chat button
(function(){
  console.log('Chat script loaded - floating WhatsApp activated');
  
  var a = document.createElement('a');
  a.href = 'https://wa.me/12134664646';
  a.target = '_blank';
  a.style.position='fixed';
  a.style.right='18px';
  a.style.bottom='18px';
  a.style.background='#25D366';
  a.style.color='#fff';
  a.style.padding='12px 14px';
  a.style.borderRadius='10px';
  a.style.fontWeight='700';
  a.style.fontSize='15px';
  a.style.boxShadow='0 4px 10px rgba(0,0,0,.3)';
  a.style.zIndex='999';
  a.style.textDecoration='none';
  a.innerText='💬 WhatsApp Us';
  document.body.appendChild(a);
})();
