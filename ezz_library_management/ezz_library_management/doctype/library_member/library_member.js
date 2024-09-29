// Copyright (c) 2024, Eng Ezzaldeen Alwali and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
	 refresh: function(frm) {
        frm.add_custom_button('أضافة عضوية', () => {
            frappe.new_doc('Library Membership', {
                library_member: frm.doc.name
            })
        })
        frm.add_custom_button('أضافة معامله', () => {
            frappe.new_doc('Library Transaction', {
                library_member: frm.doc.name
            })
        })
    }
});
