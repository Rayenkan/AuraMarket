"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useUpdateSearchParams() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    const setSearchParam = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        router.replace(`${pathName}/?${params.toString()}`);
    };

    const clearAndSetSearchParams = (
        data: { name: string; value: string }[]
    ) => {
        const params = new URLSearchParams();
        data.forEach(({ name, value }) => {
            params.set(name, value);
        });

        router.replace(`${pathName}/?${params.toString()}`);
    };

    const appendSearchParam = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.append(name, value);
            router.replace(`${pathName}/?${params.toString()}`);
        },
        [searchParams, pathName, router]
    );

    const getSearchParam = (name: string): string | null => {
        return searchParams.get(name);
    };

    return { appendSearchParam, setSearchParam, clearAndSetSearchParams, getSearchParam };
}
