import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis diam vel odio accumsan malesuada. Nunc interdum, tellus vitae volutpat fermentum, diam nibh dictum augue, in dapibus augue massa a metus. Aliquam congue nunc vitae risus ultricies, non consequat nisi posuere. Suspendisse tempor malesuada magna, posuere luctus orci vulputate vitae. Etiam a iaculis elit. Mauris a lectus feugiat, rhoncus felis in, gravida lorem. Maecenas sollicitudin dui et magna convallis, luctus consequat neque blandit. Phasellus ut accumsan quam. Nulla facilisi.
<br/><br/>
Mauris sit amet molestie lacus, ac mollis mi. Donec in mi tincidunt, porta velit sed, viverra tellus. Nulla sed ligula vitae dolor aliquet commodo in vitae elit. Nam congue vel libero sed malesuada. Cras massa libero, lacinia et lacus eget, luctus scelerisque tortor. Mauris viverra nibh turpis, vitae pharetra lectus mollis nec. Praesent laoreet velit mauris, vel posuere nisl volutpat non. Vivamus sed dignissim justo. Morbi malesuada, augue vel varius aliquam, augue tortor pretium nulla, nec euismod arcu dolor vitae turpis. In et neque quis urna consequat condimentum eget sed eros. Duis sagittis malesuada dictum. Sed non porta ex. Vestibulum mi enim, ornare sit amet accumsan sed, iaculis vitae ligula.
<br/><br/>
Curabitur efficitur venenatis lacus, et bibendum nulla pretium ac. Donec sollicitudin malesuada tortor ut tempor. Vestibulum tempor placerat libero, at porttitor urna efficitur et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin luctus dictum venenatis. Donec eu suscipit arcu, at iaculis augue. Integer nisl sapien, imperdiet auctor tellus at, consectetur vehicula eros. Donec porttitor ante at nibh posuere semper ac ac nisi. Quisque viverra iaculis dolor et imperdiet. Nulla ante nibh, posuere eu augue eu, mattis gravida mauris. Quisque erat turpis, vehicula vel interdum ac, venenatis non leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id tellus augue.
<br/><br/>
Pellentesque nec diam mattis, auctor elit et, suscipit dui. Donec congue elit faucibus mi tristique, vel imperdiet quam laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lacus lacus, euismod sed auctor a, pulvinar nec lectus. Duis iaculis nec massa id vulputate. Nulla vitae erat in purus ultricies hendrerit. Phasellus gravida, eros in malesuada efficitur, velit tortor pulvinar mauris, in luctus sapien dolor id massa. Sed tincidunt lacus vel dui pulvinar dignissim. Maecenas a magna scelerisque, lacinia urna fermentum, venenatis orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quam quam, sodales et mollis ut, tempor et nisi. Curabitur egestas lacus lacus, pellentesque fermentum nunc ultricies at. Donec cursus, nibh in ultricies accumsan, est dui bibendum dui, vitae pellentesque erat nibh rutrum diam. Nam ac hendrerit sapien. Sed in pharetra ex, vel vehicula neque.
<br/><br/>
Donec hendrerit, ante in egestas accumsan, magna purus molestie ligula, eget vestibulum tellus purus nec lorem. Maecenas quis blandit risus, ac rhoncus diam. Vestibulum quis vulputate orci. Ut velit nisi, semper vel imperdiet sit amet, condimentum scelerisque tortor. Fusce ullamcorper tincidunt diam nec mattis. Etiam luctus viverra erat quis feugiat. Cras at massa a nisl fringilla vehicula ut ut orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed placerat enim in pharetra cursus. Donec efficitur at ex blandit convallis. Vestibulum lectus enim, iaculis quis suscipit at, malesuada id ligula.
`;


const body = document.querySelector('body');
body.append(text);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);



// * FUNCION QUE HACE UN CALCULO

const calcularPorcentaje = (event) => {
   const {
        scrollTop,
        scrollHeight,
        clientHeight
   } = event.target.documentElement;
    
   return (scrollTop / (scrollHeight - clientHeight)) * 100;
   
};

//* STREAMS //OBSERVABLE
const scroll$ = fromEvent(document,'scroll');

const progress$ = scroll$.pipe(
    //map(event => calcularPorcentaje(event))
    map(calcularPorcentaje ),
    tap(console.log)
);  


//* SUBSCRIPTION
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});

