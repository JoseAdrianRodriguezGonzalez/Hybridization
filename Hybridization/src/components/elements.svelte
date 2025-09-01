<script>
    import './elements.css';
    export let atomicNumber=0;
    export let elementName="Hydrogen";
    export let Symbol="H";
    export let n=1;
    export let l=0;
    export let m=0;
    import H from '/images/H.png'
</script>
<div class="main">
    <div class="top">{atomicNumber}</div>
    <div class="top1">{elementName}</div>
    
    
        <div class="mid">
            <img class ="H" src={H} alt="">
        </div>
        <div class="quantum">
            <ul>
                <li>n={n}</li>
                <li>l={l}</li>
                <li>m={m}</li>
            </ul>
        </div>
    <div class="down">{Symbol}</div>
</div>