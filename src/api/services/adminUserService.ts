import apiClient from "../apiClient";
import { ENDPOINTS } from "@/config/apiConfig";
import type { BasicStatus } from "#/enum";

export type AdminUser = {
	id: number | string;
	email: string;
	first_name?: string;
	last_name?: string;
	avatar?: string;
	status?: BasicStatus;
	is_active?: boolean;
	date_joined?: string;
};

export type AdminUserListParams = {
	search?: string;
	status?: BasicStatus | string;
	page?: number;
	page_size?: number;
};

export type AdminUserPayload = {
	email: string;
	password?: string;
	first_name?: string;
	last_name?: string;
	status?: BasicStatus;
	is_active?: boolean;
};

const list = (params?: AdminUserListParams) => apiClient.get({ url: ENDPOINTS.ADMIN.USERS, params });
const detail = (id: AdminUser["id"]) => apiClient.get({ url: `${ENDPOINTS.ADMIN.USERS}${id}/` });
const create = (data: AdminUserPayload) => apiClient.post({ url: ENDPOINTS.ADMIN.USERS, data });
const update = (id: AdminUser["id"], data: AdminUserPayload) => apiClient.request({ url: `${ENDPOINTS.ADMIN.USERS}${id}/`, method: "PATCH", data });
const remove = (id: AdminUser["id"]) => apiClient.delete({ url: `${ENDPOINTS.ADMIN.USERS}${id}/` });

export default {
	list,
	detail,
	create,
	update,
	remove,
};
