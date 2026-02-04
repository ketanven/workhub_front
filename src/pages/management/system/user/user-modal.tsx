import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/form";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";
import type { BasicStatus } from "#/enum";
import { BasicStatus as BasicStatusEnum } from "#/enum";

export type UserFormValues = {
	id?: number | string;
	email: string;
	first_name?: string;
	last_name?: string;
	password?: string;
	status: BasicStatus;
};

export type UserModalProps = {
	title: string;
	show: boolean;
	formValue: UserFormValues;
	loading?: boolean;
	onOk: (values: UserFormValues) => void | Promise<void | { fieldErrors?: Record<string, string[]> }>;
	onCancel: VoidFunction;
};

export default function UserModal({ title, show, formValue, loading, onOk, onCancel }: UserModalProps) {
	const isCreate = !formValue?.id;
	const form = useForm<UserFormValues>({
		defaultValues: formValue,
	});

	useEffect(() => {
		form.reset(formValue);
		form.clearErrors();
	}, [formValue, form]);

	return (
		<Dialog open={show} onOpenChange={(open) => !open && onCancel()}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							rules={{
								required: "Email is required",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Enter a valid email address",
								},
							}}
							render={({ field }) => (
								<FormItem className="grid grid-cols-4 items-center gap-4">
									<FormLabel className="text-right">Email</FormLabel>
									<div className="col-span-3">
										<FormControl>
											<Input type="email" {...field} />
										</FormControl>
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="first_name"
							rules={{
								required: "First name is required",
							}}
							render={({ field }) => (
								<FormItem className="grid grid-cols-4 items-center gap-4">
									<FormLabel className="text-right">First Name</FormLabel>
									<div className="col-span-3">
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="last_name"
							rules={{
								required: "Last name is required",
							}}
							render={({ field }) => (
								<FormItem className="grid grid-cols-4 items-center gap-4">
									<FormLabel className="text-right">Last Name</FormLabel>
									<div className="col-span-3">
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							rules={{
								validate: (value) => {
									if (!isCreate && !value) return true;
									if (!value) return "Password is required";
									if (value.length < 6) return "Password must be at least 6 characters";
									return true;
								},
							}}
							render={({ field }) => (
								<FormItem className="grid grid-cols-4 items-center gap-4">
									<FormLabel className="text-right">{isCreate ? "Password" : "Password (optional)"}</FormLabel>
									<div className="col-span-3">
										<FormControl>
											<Input type="password" autoComplete="new-password" {...field} />
										</FormControl>
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem className="grid grid-cols-4 items-center gap-4">
									<FormLabel className="text-right">Status</FormLabel>
									<div className="col-span-3">
										<FormControl>
											<RadioGroup onValueChange={(value) => field.onChange(Number(value))} value={String(field.value)}>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value={String(BasicStatusEnum.ENABLE)} id="user_status_enable" />
													<Label htmlFor="user_status_enable">Enable</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value={String(BasicStatusEnum.DISABLE)} id="user_status_disable" />
													<Label htmlFor="user_status_disable">Disable</Label>
												</div>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>
					</div>
				</Form>
				<DialogFooter>
					<Button variant="outline" onClick={onCancel} disabled={loading}>
						Cancel
					</Button>
					<Button
						disabled={loading}
						onClick={() => {
							form.handleSubmit(async (values) => {
								const result = await onOk(values);
								if (result?.fieldErrors) {
									Object.entries(result.fieldErrors).forEach(([field, messages]) => {
										form.setError(field as keyof UserFormValues, {
											type: "server",
											message: Array.isArray(messages) ? messages[0] : String(messages),
										});
									});
								}
							})();
						}}
					>
						Save
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
