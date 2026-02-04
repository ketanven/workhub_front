import { faker } from "@faker-js/faker";
import type { Menu, Permission, Role, User } from "#/entity";
import { PermissionType } from "#/enum";

const { GROUP, MENU, CATALOGUE } = PermissionType;

export const DB_MENU: Menu[] = [
	// group
	{ id: "group_dashboard", name: "sys.nav.dashboard", code: "dashboard", parentId: "", type: GROUP },
	{ id: "group_pages", name: "sys.nav.pages", code: "pages", parentId: "", type: GROUP },
	{ id: "group_ui", name: "sys.nav.ui", code: "ui", parentId: "", type: GROUP },
	{ id: "group_others", name: "sys.nav.others", code: "others", parentId: "", type: GROUP },

	// group_dashboard
	{
		id: "workbench",
		parentId: "group_dashboard",
		name: "sys.nav.workbench",
		code: "workbench",
		icon: "local:ic-workbench",
		type: MENU,
		path: "/workbench",
		component: "/pages/dashboard/workbench",
	},
	{
		id: "analysis",
		parentId: "group_dashboard",
		name: "sys.nav.analysis",
		code: "analysis",
		icon: "local:ic-analysis",
		type: MENU,
		path: "/analysis",
		component: "/pages/dashboard/analysis",
	},

	// group_pages
	// management
	{
		id: "management",
		parentId: "group_pages",
		name: "sys.nav.management",
		code: "management",
		icon: "local:ic-management",
		type: CATALOGUE,
		path: "/management",
	},
	{
		id: "management_system_user",
		parentId: "management",
		name: "sys.nav.system.user",
		code: "management:system:user",
		type: MENU,
		path: "/management/system/user",
		component: "/pages/management/system/user",
	},
	{
		id: "management_system_role",
		parentId: "management",
		name: "sys.nav.system.role",
		code: "management:system:role",
		type: MENU,
		path: "/management/system/role",
		component: "/pages/management/system/role",
	},
	{
		id: "management_system_permission",
		parentId: "management",
		name: "sys.nav.system.permission",
		code: "management:system:permission",
		type: MENU,
		path: "/management/system/permission",
		component: "/pages/management/system/permission",
	},
	// erros
	{ id: "error", parentId: "group_pages", name: "sys.nav.error.index", code: "error", icon: "bxs:error-alt", type: CATALOGUE, path: "/error" },
	{ id: "error_403", parentId: "error", name: "sys.nav.error.403", code: "error:403", type: MENU, path: "/error/403", component: "/pages/sys/error/Page403" },
	{ id: "error_404", parentId: "error", name: "sys.nav.error.404", code: "error:404", type: MENU, path: "/error/404", component: "/pages/sys/error/Page404" },
	{ id: "error_500", parentId: "error", name: "sys.nav.error.500", code: "error:500", type: MENU, path: "/error/500", component: "/pages/sys/error/Page500" },

	// group_ui
	// components
	{
		id: "components",
		parentId: "group_ui",
		name: "sys.nav.components",
		code: "components",
		icon: "solar:widget-5-bold-duotone",
		type: CATALOGUE,
		path: "/components",
		caption: "sys.nav.custom_ui_components",
	},
	{
		id: "components_icon",
		parentId: "components",
		name: "sys.nav.icon",
		code: "components:icon",
		type: MENU,
		path: "/components/icon",
		component: "/pages/components/icon",
	},
	{
		id: "components_animate",
		parentId: "components",
		name: "sys.nav.animate",
		code: "components:animate",
		type: MENU,
		path: "/components/animate",
		component: "/pages/components/animate",
	},
	{
		id: "components_scroll",
		parentId: "components",
		name: "sys.nav.scroll",
		code: "components:scroll",
		type: MENU,
		path: "/components/scroll",
		component: "/pages/components/scroll",
	},
	{
		id: "components_i18n",
		parentId: "components",
		name: "sys.nav.i18n",
		code: "components:i18n",
		type: MENU,
		path: "/components/multi-language",
		component: "/pages/components/multi-language",
	},
	{
		id: "components_upload",
		parentId: "components",
		name: "sys.nav.upload",
		code: "components:upload",
		type: MENU,
		path: "/components/upload",
		component: "/pages/components/upload",
	},
	{
		id: "components_chart",
		parentId: "components",
		name: "sys.nav.chart",
		code: "components:chart",
		type: MENU,
		path: "/components/chart",
		component: "/pages/components/chart",
	},
	{
		id: "components_toast",
		parentId: "components",
		name: "sys.nav.toast",
		code: "components:toast",
		type: MENU,
		path: "/components/toast",
		component: "/pages/components/toast",
	},

	// group_others
	{
		id: "permission",
		parentId: "group_others",
		name: "sys.nav.permission",
		code: "permission",
		icon: "mingcute:safe-lock-fill",
		type: MENU,
		path: "/permission",
		component: "/pages/sys/others/permission",
	},
	{
		id: "permission_page_test",
		parentId: "group_others",
		name: "sys.nav.permission.page_test",
		code: "permission:page_test",
		icon: "mingcute:safe-lock-fill",
		type: MENU,
		path: "/permission/page-test",
		component: "/pages/sys/others/permission/page-test",
		auth: ["permission:read"],
		hidden: true,
	},
	{
		id: "calendar",
		parentId: "group_others",
		name: "sys.nav.calendar",
		code: "calendar",
		icon: "solar:calendar-bold-duotone",
		type: MENU,
		path: "/calendar",
		info: "12",
		component: "/pages/sys/others/calendar",
	},
	{
		id: "kanban",
		parentId: "group_others",
		name: "sys.nav.kanban",
		code: "kanban",
		icon: "solar:clipboard-bold-duotone",
		type: MENU,
		path: "/kanban",
		component: "/pages/sys/others/kanban",
	},
	{
		id: "disabled",
		parentId: "group_others",
		name: "sys.nav.disabled",
		code: "disabled",
		icon: "local:ic-disabled",
		type: MENU,
		path: "/disabled",
		disabled: true,
		component: "/pages/sys/others/disabled",
	},
];

export const DB_USER: User[] = [
	{ id: "user_admin_id", username: "admin", password: "demo1234", avatar: faker.image.avatarGitHub(), email: "admin@slash.com" },
	{ id: "user_test_id", username: "test", password: "demo1234", avatar: faker.image.avatarGitHub(), email: "test@slash.com" },
	{ id: "user_guest_id", username: "guest", password: "demo1234", avatar: faker.image.avatarGitHub(), email: "guest@slash.com" },
];

export const DB_ROLE: Role[] = [
	{ id: "role_admin_id", name: "admin", code: "SUPER_ADMIN" },
	{ id: "role_test_id", name: "test", code: "TEST" },
];

export const DB_PERMISSION: Permission[] = [
	{ id: "permission_create", name: "permission-create", code: "permission:create" },
	{ id: "permission_read", name: "permission-read", code: "permission:read" },
	{ id: "permission_update", name: "permission-update", code: "permission:update" },
	{ id: "permission_delete", name: "permission-delete", code: "permission:delete" },
];

export const DB_USER_ROLE = [
	{ id: "user_admin_role_admin", userId: "user_admin_id", roleId: "role_admin_id" },
	{ id: "user_test_role_test", userId: "user_test_id", roleId: "role_test_id" },
];

export const DB_ROLE_PERMISSION = [
	{ id: faker.string.uuid(), roleId: "role_admin_id", permissionId: "permission_create" },
	{ id: faker.string.uuid(), roleId: "role_admin_id", permissionId: "permission_read" },
	{ id: faker.string.uuid(), roleId: "role_admin_id", permissionId: "permission_update" },
	{ id: faker.string.uuid(), roleId: "role_admin_id", permissionId: "permission_delete" },

	{ id: faker.string.uuid(), roleId: "role_test_id", permissionId: "permission_read" },
	{ id: faker.string.uuid(), roleId: "role_test_id", permissionId: "permission_update" },
];
