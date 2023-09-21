import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AppService {
    constructor(public http: HttpClient) {}

    getUsers() {}

    getUserById(id: string | number) {}

    addUser(dto: any) {}

    editUser(id: string | number, dto: any) {}

    deleteUser(id: string) {}
}