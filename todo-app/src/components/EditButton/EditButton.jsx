import "./EditButton.css";
import { FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditButton({ editValue, setEditValue, onSave }) {
  return (
    <Dialog>
      <DialogTrigger className="edit-button">
        <FaPen />
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>تعديل المهمة</DialogTitle>
          <DialogDescription>
            قم بتعديل المهمة والضغط علي زر الحفظ عند الانتهاء من التعديل.
          </DialogDescription>
        </DialogHeader>
        <Field>
          <Label htmlFor="name-1">المهمة</Label>
          <Input
            id="name-1"
            name="name"
            placeholder="إنهاء دورة ترميز"
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
          />
        </Field>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">إلغاء</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              style={{
                cursor: "pointer",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={onSave}
            >
              حفظ
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
