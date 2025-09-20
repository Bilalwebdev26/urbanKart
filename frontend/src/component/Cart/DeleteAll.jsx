import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteAllCart } from "@/redux/Client/cart.store";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const DeleteAll = () => {
  const dispatch = useDispatch();
  const {
    cart,
    loading: cartLoading,
    error: cartError,
  } = useSelector((state) => state.cart);
  const handleDeleteAllCart = () => {
    if (cart?.products?.length < 1) {
      toast.error("No Product Available in cart.");
      return;
    }
    if (cartError) {
      toast.error(cartError);
      return;
    }
    dispatch(deleteAllCart());
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className={
              "border-red-500 lg:cursor-pointer flex items-center justify-center"
            }
          >
            <Trash2 className="text-red-500 w-5 h-5 inline-block" />
            <span className="text-red-400">Delete All</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you really reomove products from cart?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              cart and remove your cart products from you account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDeleteAllCart()}
              className={"text-white bg-red-500 hover:bg-red-600"}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteAll;
