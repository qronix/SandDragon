function Sanddragon(){
    this.init = function(){
        // this.initStyle();
        // this.initJQuery();
        this.injectElements();
        this.loadInterface();
        this.initJQueryUI();
        this.initJQuery();
    }

    this.loadInterface = function(){
        this.outputMsg('Resetting window scroll.....');
        this.outputMsg('Disabling scroll.....');
        // window.addEventListener('scroll',this.noScroll);
        // this.noScroll();
        this.outputMsg('Loading SandDragon interface.....');
        let leftCurtain = document.createElement('div');
    }

    this.noScroll      = function(){
        window.scrollTo(0,0);
    }

    // Injection of SandDragon elements

   
    this.injectElements = function(){
        this.outputMsg('Checking for body element......');
        if(this.checkForElement('body')){
            this.outputMsg('Body element was found.....');
            // let target = document.getElementsByClassName('body')[0];
            let fontStyling     = this.createElement({
                'type': 'link',
                'href': 'https://fonts.googleapis.com/css?family=Gugi',
                'rel': 'stylesheet'
            },'head');
            let leftCurtain = this.createElement({
                'type':'div',
                'id':'leftCurtain',
                'class':'sandDragonCurtain'
            },'body');
            let rightCurtain = this.createElement({
                'type':'div',
                'id':'rightCurtain',
                'class':'sandDragonCurtain'
            },'body');
            let sandDragonIcon = this.createElement({
                'type':'div',
                'id':'sandDragonIcon'
            },'body');
            let sandDraonIconImg = this.createElement({
                'type':'img',
                'id':'sandDragonIconImg',
                'src':'http://kronofire.com/projects/sandDragon/imgs/sandDragonIconFinal.png'
            },'#sandDragonIcon');
            
        }else{
            this.outputMsg('Body element was not found. Terminating');
            return(-1);
        }
    }

    // this.createLeftCurtain = function(){
    //     let element = document.createElement('div');
    //     element.setAttribute('id','leftCurtain');
    //     element.setAttribute('class','sandDragonCurtain');
    //     return(element);
    // }

    // this.createRightCurtain = function(){
    //     let element = document.createElement('div');
    //     element.setAttribute('id','leftCurtain');
    //     element.setAttribute('class',sand)
    // }

     //targetElement.insertAdjacentElement('afterbegin', newFirstElement)
    //will allow injection of elements to certain places within the target element

    this.createElement = function(attrs,target){
        let element = document.createElement(attrs.type);
        Object.entries(attrs).forEach(function(attr){
            if(attr[0]!='type'){
                element.setAttribute(attr[0],attr[1]);
            }
            if(attr[0]==='class'){
                element.classList.add(attr[1]);
            }
        });
        this.outputMsg('Element created: ' + attrs.type);
        if(this.checkForElement(target)){
            this.outputMsg('Injecting element into ' + target);
            // document.getElementsByTagName(target)[0].appendChild(element);
            document.querySelector(target).insertAdjacentElement('afterbegin',element);
        }else{
            this.outputMsg('Could not find target using selector: ' + target);
        }
    }

    this.initJQuery   = function(){
        this.outputMsg('Loading jQuery.....');
        let element = document.createElement('script');
        element.setAttribute('src','https://code.jquery.com/jquery-3.3.1.min.js');
        element.setAttribute('integrity','sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=');
        element.setAttribute('crossorigin','anonymous');
        document.getElementsByTagName('head')[0].appendChild(element);
        this.outputMsg('Validating jQuery loaded.....');
        this.checkForElement('script[src="https://code.jquery.com/jquery-3.3.1.min.js"]')?
            this.outputMsg('jQuery loaded!'):this.outputMsg('ERROR:jQueryUI NOT LOADED!');
    }
    this.initJQueryUI = function(){
        this.outputMsg('Loading jQueryUI.....');
        let element = document.createElement('script');
        element.setAttribute('src','https://code.jquery.com/ui/1.12.1/jquery-ui.js');
        element.setAttribute('integrity','sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=');
        element.setAttribute('crossorigin','anonymous');
        document.getElementsByTagName('head')[0].appendChild(element);
        this.outputMsg('Validating jQueryUI loaded.....');
        this.checkForElement('script[src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"]')?
            this.outputMsg('jQueryUI loaded!'):this.outputMsg('ERROR:jQueryUI NOT LOADED!');
    }

    this.checkForElement = function(selector){
        return (!!document.querySelector(selector)); //!! forces boolean return from function
    }

    this.initStyle = function(){
        this.outputMsg('Loading styling.....');
        let element = document.createElement("link");
        element.setAttribute('rel','stylesheet');
        element.setAttribute('type','text/css');
        element.setAttribute('href','https://pastebin.com/raw/k8u1hx3T');
        document.getElementsByTagName("head")[0].appendChild(element);
        this.outputMsg('Styling loaded');
    }

    this.moveWindow = function () {
        
    }

    this.outputMsg = function(msg){
        console.log(msg);
    }
}

var sanddragon = new Sanddragon();
