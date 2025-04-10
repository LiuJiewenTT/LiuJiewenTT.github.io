async function set_open_link_cls_inst_open_in_new_tab() {
    let open_link_instances = document.querySelectorAll('.open_link');
    for (let inst of open_link_instances ) {
        let parentNode = inst.parentNode;
        if ( parentNode instanceof HTMLAnchorElement ) {
            parentNode.setAttribute('target', 'blank');
        }
    }
}
